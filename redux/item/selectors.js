export const selectItems = (state) => state.item.items;

export const selectIsLoading = (state) => state.item.isLoading;

export const selectItemDetails = (state) => state.item.itemDetails;

export const selectCurrentPage = (state) => state.item.currentPage;

export const selectTotalPages = (state) => state.item.totalPages;

export const selectLimit = (state) => state.item.limit;

export const selectTotalItems = (state) => state.item.totalItems;

export const selectRecentlyViewedItems = (state) =>
  state.item.recentlyViewedItems;
