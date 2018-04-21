import store from '../store/store';
import { mapState, mapActions } from 'vuex';

export default {
  store,
  name: 'HelloWorld',
  data() {
    return {
      center: {
        lat: 47.540252,
        lng: 19.070899,
      },
      msg: 'Lunch finder',
      markers: [
        {
          position: {
            lat: 47.540252,
            lng: 19.070899,
          },
          infoText: 'Itt a Starschema!',
        },
      ],
      infoContent: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  computed: {
    ...mapState(['message']),
  },
  created() {
    this.setMessage('ezt mar actionon keresztul settelem');
  },
  methods: {
    ...mapActions(['setMessage']),
    toggleInfoWindow: (marker, idx) => {
      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;

      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
  },
};
