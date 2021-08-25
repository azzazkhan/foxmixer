<template>
  <page class="faq-page">
    <div class="padding-wrapper">
      <div class="faq-container">
        <h1 class="entry-title">FAQ</h1>
        <p class="entry-description">
          Here you will find questions that were frequently asked by other users.
        </p>
        <h4>How should I get started?</h4>
        <p>
          Just have a look at the "Tutorial" page. Everything relevant about bitcoins and how to create a mix is explained there. This FAQ is also helpful for finding more specific answers.
        </p>

        <h4>Can I test FoxMixer without using a high amount of bitcoins?</h4>
        <p>
          Sure! FoxMixer has a very low minimum payin amount of only 0.00200000 BTC (using only one payout address), which allows you to test FoxMixer with a small amount of bitcoins first, in order to get a feeling of how easy it is to mix your bitcoins.
        </p>

        <h4>What is a mix?</h4>
        <p>
          A mix is the thing where you pay in your bitcoins and get them mixed. A mix is always linked to your specific bitcoin receive address, where you will get your mixed bitcoins payed out.
        </p>

        <h4>How many confirmations do my transactions need?</h4>
        <p>
          Your transactions are being credited after 6 confirmations in the blockchain.
        </p>

        <h4>Do I need to send my payment within a specific time?</h4>
        <p>
          For a fast transaction processing, your payment should be initiated 48 hours after creating a mix.
        </p>

        <h4>What is the minimum amount for mixing?</h4>
        <p>
          The minimum payin amount is 0.00200000 BTC (using only one payout address). It is also shown directly after creating a new mix.
        </p>

        <h4>Can I reuse the same mix multiple times?</h4>
        <p>
          No, this is not possible, as it would reduce privacy. Just create a new mix every time you want to mix coins.
        </p>

        <h4>What is a mixcode and why should I use it?</h4>
        <p>
          Despite our huge mixing volume, there is always a chance that you could receive coins from a previous mix again. Always using the mixcode from your previous mix for future mixes ensures that you will never receive the same coins again.
        </p>

        <h4>How are mixcodes handled?</h4>
        <p>
          Mixcodes are that refer to corresponding coins are handled in a secure, hashed format for maximum privacy. In this way, no link between mixcodes and mixes is stored on our servers. After the coins corresponding to a certain mixcode have been mixed and payed out, the associated hashed mixcode is deleted automatically.
        </p>

        <h4>I didn't receive my bitcoins back even though the payout delay time is already over</h4>
        <p>
          If the blockchain is quite busy and there are many pending transactions, it may take a short while for the payment to propagate through the network. Also, due to the Deep Mempool Analysis feature, it may happen that your payout is rescheduled by some minutes, if necessary, maximizing the effectiveness of the mix. Just be patient, until your transaction is confirmed. Of course, you can contact us at any point.
        </p>

        <h4>How are my transactions processed?</h4>
        <p>
          Your transactions are being processed completely automatically by our servers. They check if your transaction was received, wait for the specified delay time and finally pay it back to your desired bitcoin address.
        </p>

        <h4>Where are the datacenters located?</h4>
        <p>
          Our decentralized servers, load balancers and network infrastructure is set up in different regions, making the origin of a transaction randomized and hidden.
        </p>

        <h4>Are logs deleted?</h4>
        <p>
          We don't even generate logs, so there is no need to delete them. Every part on our servers runs with log functionality turned off. While this sometimes makes our work on FoxMixer harder, it is the best way to guarantee full user privacy.
        </p>

        <h4>What do I need to I need to do if something goes wrong?</h4>
        <p>
          All you need to do is contact us and send the blockchain transaction id with that you payed the bitcoins to our mixer. You will find it in the transaction history of your bitcoin wallet. Also attach your "Letter of Guarantee". This Letter of Guarantee ensures that you will receive your bitcoins back, in any case. However, our systems are highly redundant and backed up on a regular basis. The chances that something goes wrong on our side are considerably small. If you follow all the instructions, you will be just fine.
        </p>

        <h4>What time do I have to report that something goes wrong?</h4>
        <p>
          To protect your privacy, we delete all information about your mix from our servers 7 days after you created it. If you have downloaded your "Letter of Guarantee" at the time of creating your mix, you can report issues even after this time.
        </p>

        <h4>How can I check if my Letter of Guarantee is valid?</h4>
        <p>
          In normal cases, you do not have to. If you are interested however, the Letter of Guarantee is signed by FoxMixer using the so-called OpenPGP encryption. Our public key for verification can be found <route-link to="/opengpg">here</route-link>. Depending on your operating system, there are various methods to check if the signature is valid.
        </p>

        <h4>What are the fees for this service?</h4>
        <p>
          Mixing bitcoins and maintaining the high quality of service by providing redundant server infrastructure involves considerable time and effort. That's why we subtract an overall fee of 1 % as well as 0.00070000 BTC for every output address you use.
        </p>

        <h4>Can I access FoxMixer using Tor?</h4>
        <p>
          Yes, the preferred way is to use our onion V3 URL: foxmixer4dw2zluv7gy4pgqrpp2ab6p323s5clcyt7i5csbpk2pzezid.onion
          The older onion V2 URL is still active, but <a href="https://blog.torproject.org/v2-deprecation-timeline">may not work anymore</a> with the latest version of Tor: foxmixer6mrsuxrl.onion
        </p>

        <h4>What is your current mixing volume?</h4>
        <p>
          Our current mixing volume is around 200 BTC.
        </p>

        <h4>Why should I use a payout delay?</h4>
        <p>
          A payout delay makes a time correlation between your payin and payout impossible. This increases the strength of the mix.
        </p>

        <h4>Why should I use multiple payout addresses?</h4>
        <p>
          Let's say you pay in 6.00000000 BTC, so you will get back almost the same amount of bitcoins. It is easier for a third party to find the corresponding payout if there is only one payout address, than if the output is split among multiple addresses. For example, you could have three payout addresses with an amount of 2.00000000 BTC each. This increases the strength of the mix.
        </p>

        <h4>How many transactions are used for payouts?</h4>
        <p>
          To increase the strength of the mix, our algorithms may in some specific cases detect the need to split the payout in up to 3 transactions. This is a measure we take for increased privacy and does not affect the payout amount in any way.
        </p>

        <h4>When should I use absolute payout amounts, and when relative ones?</h4>
        <p>
          Typically, you have a fixed amount of bitcoins that you want to mix. In this case, relative payouts are more convenient, as you can decide about the relative distribution of payouts. In other cases, you may want to get back a predefined payout amount at the end of the mix. That's where absolute payout amounts make more sense, as you can precisely set the amount you will get.
        </p>

        <p>
          <router-link class="start-btn" to="/">Start Mixing</router-link>
        </p>
      </div>
    </div>
  </page>
</template>

<style lang="scss">
.padding-wrapper {
  padding: 0 40px;
}
.faq-container {
  max-width: 1000px;
  margin: 0 auto;
  .entry-title {
    font-size: 56px;
    color: var(--color-primary);
    margin-bottom: 10px;
  }
  .entry-description {
    color: black;
    font-size: 18px;
  }
  h4 {
    color: var(--color-primary);
    font-size: 30px;
    margin: 30px 0 15px;
    line-height: 32px;
  }
  p {
    color: black;
    font-size: 18px;
    line-height: 24px;
  }
  .start-btn {
    background-color: #03a9f4;
    color: white;
    font-size: 30px;
    font-weight: 400;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    min-width: 90px;
    margin: 0 auto 20px;
    padding: 0 30px;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.9;
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Page from "../components/Page.vue";

export default Vue.extend({
  name: "FAQ",
  components: {
    page: Page,
  },
});
</script>
