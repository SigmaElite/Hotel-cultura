import RestaurantHero from '../components/restaurant/RestaurantHero';
import RestaurantAbout from '../components/restaurant/RestaurantAbout';
import RestaurantMenu from '../components/restaurant/RestaurantMenu';
import RestaurantGallery from '../components/restaurant/RestaurantGallery';
import RestaurantReservation from '../components/restaurant/RestaurantReservation';

export default function RestaurantPage() {
  return (
    <>
      <RestaurantHero />
      <RestaurantAbout />
      <RestaurantMenu />
      <RestaurantGallery />
      <RestaurantReservation />
    </>
  );
}
