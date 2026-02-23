export const paths = {
  home: () => "/",
  cityHome: (citySlug: string) => `/c/${citySlug}`,
  category: (citySlug: string, categorySlug: string) => `/c/${citySlug}/${categorySlug}`,
  place: (citySlug: string, placeId: string) => `/c/${citySlug}/place/${placeId}`,
  search: (citySlug: string) => `/c/${citySlug}/search`,
};