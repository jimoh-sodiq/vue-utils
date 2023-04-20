/**
 * returns selectedRows, source, allRowsSelected,
 * toggleRowSelection, isEmptySource, clearSelectedRows,
 * isSelectedAvailable, selectAllRows
 */
export function useTableSelection<T>(dataSource: Ref<T[]> | T[]) {
  const selectedRows: Ref<T[]> = ref([]);

  const source = computed<T[]>(() => {
    return unref(dataSource);
  });

  const allRowsSelected = computed<boolean>(() => {
    return source.value.length === selectedRows.value.length;
  });

  const isEmptySource = computed(() => {
    return source.value.length > 0;
  });

  const isSelectedAvailable = computed(() => {
    return selectedRows.value.length > 0;
  });

  /**
   * clear the selected rows
   * @returns
   */
  function clearSelectedRows() {
    selectedRows.value = [];
  }

  watch(
    source.value,
    () => {
      console.log("hello there");
      selectedRows.value = selectedRows.value.filter((row) =>
        source.value.includes(row)
      );
    },
    { immediate: true }
  );

  /**
   * select all available rows
   * @returns
   */
  function selectAllRows() {
    selectedRows.value = source.value;
  }
  /**
   * check if all rows are selected, if so, deselect all exisiting rows or select all if none is selected
   * @returns
   */
  function toggleRowSelection() {
    if (selectedRows.value.length > 0) {
      selectedRows.value = [];
      return;
    }
    for (const item of source.value) {
      if (!selectedRows.value.includes(item)) {
        selectedRows.value.push(item);
      }
    }
  }

  return {
    source,
    selectedRows,
    allRowsSelected,
    toggleRowSelection,
    isEmptySource,
    isSelectedAvailable,
    clearSelectedRows,
    selectAllRows,
  };
}
