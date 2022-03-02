import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '2fofxaaw',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skaCZEhT73lbhwWmhCjkc4aSnOm5wkTntL6omTI6C5vRS5mkcN1NVBm5GiNBZ9KSsfIBAI6QtOhM2fiXqmkK7E9zw4XeWarOpGDc8tyZAly0J76RDWLhdXHw243iw7pJqzZ1cSKd11sERWV5TrJaa5rrOIB0icMPDs9u1D0wUwmHpHiaN0Uf',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
