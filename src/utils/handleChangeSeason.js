export const handleChangeSeason = (season, setCurrenSeasons) => {
  switch (season) {
    case "uno":
      return setCurrenSeasons([0, 151])
    case "dos":
      return setCurrenSeasons([151, 100])
    case "tres":
      return setCurrenSeasons([251, 135])
    case "cuatro":
      return setCurrenSeasons([386, 108])
    case "cinco":
      return setCurrenSeasons([494, 155])
    case "seis":
      return setCurrenSeasons([649, 72])
    case "siete":
      return setCurrenSeasons([721, 88])
    case "ocho":
      return setCurrenSeasons([809, 96])
    default:
      return setCurrenSeasons([0, 151])
  }
}