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
  mounted() {
    this.getPlaces();
  },
  computed: {
    ...mapState(['message', 'places', 'currentPlace']),
  },
  created() {
    this.setMessage('Lunch Finder');
  },
  methods: {
    ...mapActions(['setMessage', 'getPlaces', 'openList', 'closeList']),
    toggleInfoWindow(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;

      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
        this.openList(idx);
      }
    },
    closeInfoWindow() {
      this.infoWinOpen = false;
      this.currentMidx = null;
      this.closeList();
    },
  },
};
