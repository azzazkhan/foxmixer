declare type PayoutMethod = "percentage" | "amount";

interface Widget {
  number: number;
  address: string;
  delay: number;
  percentage: number;
  amount: string;
}

interface ValidatorFunction {
  (message: string): void;
}

interface Validator {
  (fn: ValidatorFunction, method: PayoutMethod, widgets: Widget[]): boolean;
}

const validateMix: Validator = (fn, method, widgets) => {
  const totalWidgets = widgets.length;
  const totalPercentage = widgets.map((widget) => widget.percentage).reduce((p, c) => p + c, 0);
  const totalAmount = widgets.map((widget) => parseFloat(widget.amount)).reduce((p, c) => p + c, 0);

  const regex = {
    address: /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/,
    amount: /^\d\d*(\.\d+)?$/
  };

  // There are total of one widget and it's address is empty
  if (totalWidgets === 1 && !widgets[0].address) {
    fn("You must specify at least 1 values");
    return false;
  }
  // If there are more then 1 widget and payout method is set to relative
  // percentages then sum of all percentages must be equal to 100%
  else if (method === "percentage" && totalWidgets > 1 && totalPercentage !== 100) {
    fn("The total payout amount must be equal to 100%");
    return false;
  }
  // Total payout amount must be greater than 0.00200000
  else if (method === "amount" && totalAmount < 0.002) {
    fn(
      "The total payin amount must be at least 0.00200000 BTC. Increase the payout amounts to reach this minimum."
    );
    return false;
  }

  // Validate each payout's details
  for (const [index, widget] of widgets.entries()) {
    // Amount is empty or is invalid
    if (
      method === "amount" &&
      (!widget.amount || !regex.amount.test(widget.amount) || parseFloat(widget.amount) < 0.00001)
    ) {
      fn(`payoutAddresses.${index}.payoutPercentage is invalid`);
      return false;
    }
    // Payout address is empty
    else if (!widget.address) {
      fn(`payoutAddresses.${index}.payoutPercentage is invalid`);
      return false;
    }
    // Payout address is invalid
    else if (!regex.address.test(widget.address)) {
      fn(`payoutAddresses.${index}.address is invalid`);
      return false;
    }
  }

  return true;
};

export default validateMix;
