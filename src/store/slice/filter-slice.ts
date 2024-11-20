import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface categoryI
export interface FilteredDataState {
  filteredAndSortedData: any[];
  category: string;
}

const initialState: FilteredDataState = {
  filteredAndSortedData: [],
  category: "All Products",
};

const filteredDataSlice = createSlice({
  name: "filteredData",
  initialState,
  reducers: {
    setFilteredAndSortedData: (state, action: PayloadAction<any[]>) => {
      state.filteredAndSortedData = action.payload;
    },
    filterAndSortCat: (
      state,
      action: PayloadAction<{
        list: any[];
        category: string;
        sortCriteria: string;
      }>
    ) => {
      const { list, category, sortCriteria } = action.payload;

      const filteredList =
        category && category !== "All Products"
          ? list.filter((item) => item?.category === category)
          : list;

      const sortedList = filteredList.slice().sort((a, b) => {
        switch (sortCriteria) {
          case "A-Z":
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
          case "Z-A":
            return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
          case "highest price":
            return b.price - a.price;
          case "lowest price":
            return a.price - b.price;
          default:
            return 0;
        }
      });

      state.filteredAndSortedData = sortedList;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});
export const { setFilteredAndSortedData, filterAndSortCat, setCategory } =
  filteredDataSlice.actions;
export default filteredDataSlice.reducer;
