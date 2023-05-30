export const selectIsItem = state => state.phonebook?.item;

export const selectIsFilter = state => state.phonebook?.filter;

export const selectIsRefreshing = state => state.phonebook?.getIsFetchAnswer;
