const categories = [
  {
    id: 1,
    name: "Books",
    subCategories: [
      { id: 1, name: "Hardcover" },
      { id: 2, name: "Paperback" },
      { id: 3, name: "Electronic" }
    ]
  },
  {
    id: 2,
    name: "Movies",
    subCategories: [
      { id: 4, name: "DVD" },
      { id: 5, name: "BluRay" },
      { id: 6, name: "Download" }
    ]
  },
  {
    id: 3,
    name: "Games",
    subCategories: [{ id: 7, name: "XBox" }, { id: 8, name: "PC" }]
  },
  { id: 4, name: "Music" }
]

export function getCategoryName(catId) {
  return categories.find(category => category.id === catId).name
}

export function getSubCategoryName(catId, subCatId) {
  const category = categories.find(category => category.id === catId)
  return category.subCategories.find(subCat => subCat.id === subCatId).name
}

export default categories
