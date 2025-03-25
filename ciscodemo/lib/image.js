import createImageUrlBuilder from '@sanity/image-url';
// import { dataset, projectId } from '@/lib/env';

const imageBuilder = createImageUrlBuilder({
  projectId:  'ztvimmqg',
  dataset:  'production',
});

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max');
};