<template>
  <div class="reviews-carousel">
    <Carousel>
      <Review :rating="5" name="Jasonman - bitco.in">
        Your service worked fabulously for me, got back my coins mixed. Keep up that great website.
      </Review>
      <Review :rating="5" name="Uwanna - forum.bitcoin.com">
        This mixer fulfills and exceeds all expectations of a high quality and high volume mixing
        service. The payout time can be set very accurately, which makes it possible to use it for
        paying bills directly and on time. Super!
      </Review>
      <Review :rating="5" name="David Walker - bittrust.org">
        Definitely one of the best bitcoin mixers out there. If you're looking for a fast, high
        quality and low fee bitcoin tumbling service, this is the mixer to use. Great!
      </Review>
      <Review :rating="5" name="bitcoin2.biz">
        FoxMixer is a great mixer which is easy to use. Both beginners and sophisticated Bitcoin
        traders will find it suitable for their needs.
      </Review>
      <Review :rating="4" name="Rmcdermott927 - forum.bitcoin.com">
        It's good to see that there are starting to be more reputable mixing options in the crypto
        space.
      </Review>
      <Review :rating="5" name="Roy - bittrust.org">
        Simple and intuitive, works as expected.
      </Review>
      <Review :rating="5" name="Jasonman - bitco.in">
        Your service worked fabulously for me, got back my coins mixed. Keep up that great website.
      </Review>
      <Review :rating="5" name="Uwanna - forum.bitcoin.com">
        This mixer fulfills and exceeds all expectations of a high quality and high volume mixing
        service. The payout time can be set very accurately, which makes it possible to use it for
        paying bills directly and on time. Super!
      </Review>
      <Review :rating="5" name="David Walker - bittrust.org">
        Definitely one of the best bitcoin mixers out there. If you're looking for a fast, high
        quality and low fee bitcoin tumbling service, this is the mixer to use. Great!
      </Review>
      <Review :rating="5" name="bitcoin2.biz">
        FoxMixer is a great mixer which is easy to use. Both beginners and sophisticated Bitcoin
        traders will find it suitable for their needs.
      </Review>
    </Carousel>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Carousel from "./OwlCarousel.vue";
  import Review from "./Review.vue";

  export default Vue.extend({
    name: "ReviewsCarousel",
    components: {
      Carousel,
      Review
    }
  });
</script>
