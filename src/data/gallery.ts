import weddingImage from '../assets/images/gallery/wedding.jpg'
import engagementImage from '../assets/images/gallery/engagement.jpg'
import birthdayImage from '../assets/images/gallery/birthday.jpg'
import traditionalImage from '../assets/images/gallery/traditional.jpg'
import babyShowerImage from '../assets/images/gallery/baby-shower.jpg'
import specialEventImage from '../assets/images/gallery/special-event.jpg'

export type GalleryItem = {
  id: string
  title: string
  category: string
  imageUrl: string
  alt: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'wedding-1',
    title: 'Wedding Celebration',
    category: 'Weddings',
    imageUrl: weddingImage,
    alt: 'Wedding decor by Just Peachy Events',
  },
  {
    id: 'engagement-1',
    title: 'Engagement Celebration',
    category: 'Engagements',
    imageUrl: engagementImage,
    alt: 'Engagement decor by Just Peachy Events',
  },
  {
    id: 'birthday-1',
    title: 'Birthday Celebration',
    category: 'Birthdays',
    imageUrl: birthdayImage,
    alt: 'Birthday decor by Just Peachy Events',
  },
  {
    id: 'traditional-1',
    title: 'Traditional Celebration',
    category: 'Traditional Events',
    imageUrl: traditionalImage,
    alt: 'Traditional event decor by Just Peachy Events',
  },
  {
    id: 'baby-shower-1',
    title: 'Baby Shower',
    category: 'Baby Showers',
    imageUrl: babyShowerImage,
    alt: 'Baby shower decor by Just Peachy Events',
  },
  {
    id: 'special-event-1',
    title: 'Special Celebration',
    category: 'Special Events',
    imageUrl: specialEventImage,
    alt: 'Special event decor by Just Peachy Events',
  },
]