<h3>New Mix Generated</h3>
<p>
    A new mix was generated at {{ $app_name }} on <strong>{{ $created }}</strong>.<br />
    The mix will expire at <strong>{{ $expiry }}</strong><br />
    Following are the payout details of that mix:
</p>

<div>
    <p>
        {{ str_repeat('=', 70) }}<br />
        @foreach ($payouts as $payout)
        Payout {{ $payout['number'] }}<br />
        {!! str_repeat('&nbsp;', 8) !!}Payout address: {{ $payout['address'] }}<br />
        {!! str_repeat('&nbsp;', 8) !!}Payout delay: {{ $payout['delay'] }} Hours<br />
        @if ($method === 'amount')
        {!! str_repeat('&nbsp;', 8) !!}Payout amount: <strong>{{ $payout['amount'] }} BTC</strong><br />
        @else
        {!! str_repeat('&nbsp;', 8) !!}Payout percentage: <strong>{{ $payout['percentage'] }} %</strong><br />
        @endif

        {!! str_repeat('&nbsp;', 8) !!}Payout date: {{ $payout['date'] }}<br />
        {{ str_repeat('=', 70) }}<br />
        @endforeach
    </p>
</div>

<p>
    Mix ID:
    <a href="{{ $site_url }}/mix/{{ $id }}" title="View mix details">
        <strong>{{ $id }}</strong>
    </a><br />
    Mixcode: <strong>{{ $code }}</strong>
</p>
