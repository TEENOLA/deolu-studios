export interface Testimonial {
  id: string
  name: string
  business: string
  quote: string
  image?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Bellweather',
    business: 'Founder, Northfield & Co. Law',
    quote:
      'deolustudios took a vague idea of "make us look credible online" and turned it into a site that actually brings in consultation bookings every week.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 't2',
    name: 'Priya Chandran',
    business: 'Owner, Wildgrain Goods',
    quote:
      'Our old site was slow and looked homemade. What we got back was fast, beautiful, and easy for me to update myself.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 't3',
    name: 'Daniel Osei',
    business: 'Principal, Coastal Realty Group',
    quote:
      'Clear communication from day one. They asked the right questions before writing a single line of code, and it showed in the result.',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
  {
    id: 't4',
    name: 'Sarah Whitfield',
    business: 'Business Coach',
    quote:
      "My booking rate doubled within the first month. The site doesn't just look premium — it's clearly built to convert.",
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
]
