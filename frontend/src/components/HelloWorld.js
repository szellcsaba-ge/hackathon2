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
    // this.loadPlaces();
  },
  computed: {
    ...mapState(['message', 'places']),
  },
  created() {
    this.setMessage('ezt mar actionon keresztul settelem');
  },
  methods: {
    ...mapActions(['setMessage', 'getPlaces']),
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
    loadPlaces() {
      /* this.$http.get('http://localhost/api/v1/sample.json').then((data, status, request) => {
        data.body.places.map((place) => {
          this.markers.push({
            position: { lat: place.latitude, lng: place.longitude },
            infoText: place.place_name,
          });
        });
      }); */
    },
  },
};
