(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["faq"],{"067e":function(e,t,o){"use strict";o("88dc")},"0b2e":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("page",{staticClass:"faq-page"},[o("div",{staticClass:"padding-wrapper"},[o("div",{staticClass:"faq-container"},[o("h1",{staticClass:"entry-title"},[e._v("FAQ")]),o("p",{staticClass:"entry-description"},[e._v(" Here you will find questions that were frequently asked by other users. ")]),o("h4",[e._v("How should I get started?")]),o("p",[e._v(' Just have a look at the "Tutorial" page. Everything relevant about bitcoins and how to create a mix is explained there. This FAQ is also helpful for finding more specific answers. ')]),o("h4",[e._v("Can I test FoxMixer without using a high amount of bitcoins?")]),o("p",[e._v(" Sure! FoxMixer has a very low minimum payin amount of only 0.00200000 BTC (using only one payout address), which allows you to test FoxMixer with a small amount of bitcoins first, in order to get a feeling of how easy it is to mix your bitcoins. ")]),o("h4",[e._v("What is a mix?")]),o("p",[e._v(" A mix is the thing where you pay in your bitcoins and get them mixed. A mix is always linked to your specific bitcoin receive address, where you will get your mixed bitcoins payed out. ")]),o("h4",[e._v("How many confirmations do my transactions need?")]),o("p",[e._v(" Your transactions are being credited after 6 confirmations in the blockchain. ")]),o("h4",[e._v("Do I need to send my payment within a specific time?")]),o("p",[e._v(" For a fast transaction processing, your payment should be initiated 48 hours after creating a mix. ")]),o("h4",[e._v("What is the minimum amount for mixing?")]),o("p",[e._v(" The minimum payin amount is 0.00200000 BTC (using only one payout address). It is also shown directly after creating a new mix. ")]),o("h4",[e._v("Can I reuse the same mix multiple times?")]),o("p",[e._v(" No, this is not possible, as it would reduce privacy. Just create a new mix every time you want to mix coins. ")]),o("h4",[e._v("What is a mixcode and why should I use it?")]),o("p",[e._v(" Despite our huge mixing volume, there is always a chance that you could receive coins from a previous mix again. Always using the mixcode from your previous mix for future mixes ensures that you will never receive the same coins again. ")]),o("h4",[e._v("How are mixcodes handled?")]),o("p",[e._v(" Mixcodes are that refer to corresponding coins are handled in a secure, hashed format for maximum privacy. In this way, no link between mixcodes and mixes is stored on our servers. After the coins corresponding to a certain mixcode have been mixed and payed out, the associated hashed mixcode is deleted automatically. ")]),o("h4",[e._v("I didn't receive my bitcoins back even though the payout delay time is already over")]),o("p",[e._v(" If the blockchain is quite busy and there are many pending transactions, it may take a short while for the payment to propagate through the network. Also, due to the Deep Mempool Analysis feature, it may happen that your payout is rescheduled by some minutes, if necessary, maximizing the effectiveness of the mix. Just be patient, until your transaction is confirmed. Of course, you can contact us at any point. ")]),o("h4",[e._v("How are my transactions processed?")]),o("p",[e._v(" Your transactions are being processed completely automatically by our servers. They check if your transaction was received, wait for the specified delay time and finally pay it back to your desired bitcoin address. ")]),o("h4",[e._v("Where are the datacenters located?")]),o("p",[e._v(" Our decentralized servers, load balancers and network infrastructure is set up in different regions, making the origin of a transaction randomized and hidden. ")]),o("h4",[e._v("Are logs deleted?")]),o("p",[e._v(" We don't even generate logs, so there is no need to delete them. Every part on our servers runs with log functionality turned off. While this sometimes makes our work on FoxMixer harder, it is the best way to guarantee full user privacy. ")]),o("h4",[e._v("What do I need to I need to do if something goes wrong?")]),o("p",[e._v(' All you need to do is contact us and send the blockchain transaction id with that you payed the bitcoins to our mixer. You will find it in the transaction history of your bitcoin wallet. Also attach your "Letter of Guarantee". This Letter of Guarantee ensures that you will receive your bitcoins back, in any case. However, our systems are highly redundant and backed up on a regular basis. The chances that something goes wrong on our side are considerably small. If you follow all the instructions, you will be just fine. ')]),o("h4",[e._v("What time do I have to report that something goes wrong?")]),o("p",[e._v(' To protect your privacy, we delete all information about your mix from our servers 7 days after you created it. If you have downloaded your "Letter of Guarantee" at the time of creating your mix, you can report issues even after this time. ')]),o("h4",[e._v("How can I check if my Letter of Guarantee is valid?")]),o("p",[e._v(" In normal cases, you do not have to. If you are interested however, the Letter of Guarantee is signed by FoxMixer using the so-called OpenPGP encryption. Our public key for verification can be found "),o("router-link",{attrs:{to:"/opengpg"}},[e._v("here")]),e._v(". Depending on your operating system, there are various methods to check if the signature is valid. ")],1),o("h4",[e._v("What are the fees for this service?")]),o("p",[e._v(" Mixing bitcoins and maintaining the high quality of service by providing redundant server infrastructure involves considerable time and effort. That's why we subtract an overall fee of 1 % as well as 0.00070000 BTC for every output address you use. ")]),o("h4",[e._v("Can I access FoxMixer using Tor?")]),o("p",[e._v(" Yes, the preferred way is to use our onion V3 URL: foxmixer4dw2zluv7gy4pgqrpp2ab6p323s5clcyt7i5csbpk2pzezid.onion The older onion V2 URL is still active, but "),o("a",{attrs:{href:"https://blog.torproject.org/v2-deprecation-timeline"}},[e._v("may not work anymore")]),e._v(" with the latest version of Tor: foxmixer6mrsuxrl.onion ")]),o("h4",[e._v("What is your current mixing volume?")]),o("p",[e._v(" Our current mixing volume is around 200 BTC. ")]),o("h4",[e._v("Why should I use a payout delay?")]),o("p",[e._v(" A payout delay makes a time correlation between your payin and payout impossible. This increases the strength of the mix. ")]),o("h4",[e._v("Why should I use multiple payout addresses?")]),o("p",[e._v(" Let's say you pay in 6.00000000 BTC, so you will get back almost the same amount of bitcoins. It is easier for a third party to find the corresponding payout if there is only one payout address, than if the output is split among multiple addresses. For example, you could have three payout addresses with an amount of 2.00000000 BTC each. This increases the strength of the mix. ")]),o("h4",[e._v("How many transactions are used for payouts?")]),o("p",[e._v(" To increase the strength of the mix, our algorithms may in some specific cases detect the need to split the payout in up to 3 transactions. This is a measure we take for increased privacy and does not affect the payout amount in any way. ")]),o("h4",[e._v("When should I use absolute payout amounts, and when relative ones?")]),o("p",[e._v(" Typically, you have a fixed amount of bitcoins that you want to mix. In this case, relative payouts are more convenient, as you can decide about the relative distribution of payouts. In other cases, you may want to get back a predefined payout amount at the end of the mix. That's where absolute payout amounts make more sense, as you can precisely set the amount you will get. ")]),o("p",[o("router-link",{staticClass:"start-btn",attrs:{to:"/mixer"}},[e._v("Start Mixing")])],1)])])])},i=[],s=o("2b0e"),n=o("9973"),r=s["a"].extend({name:"FAQ",components:{page:n["a"]}}),u=r,h=(o("067e"),o("2877")),c=Object(h["a"])(u,a,i,!1,null,null,null);t["default"]=c.exports},"88dc":function(e,t,o){}}]);
//# sourceMappingURL=faq.e502fe7e.js.map