
export const allFiles = import.meta.glob(
  '../../static/common/assets/thumbnails/640/*.*',
  {
    eager: true,
    query: {
      enhanced: true
    },
    import: 'default'
  }
);



