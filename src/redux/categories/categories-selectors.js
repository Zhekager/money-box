const getAllCategories = state => state.categories;

const loading = state => state.categories.isLoading;

const categorySelectors = {
  getAllCategories,
  loading,
};
export default categorySelectors;
