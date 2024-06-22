export default colorType = (type) => {
  switch (type) {
    case "grass":
      return {
        backgroundColor: "#227F27"
      };
    case "poison":
      return {
        backgroundColor: "#AA3DAA"
      };
    case "fire":
      return {
        backgroundColor: "#FF0000"
      };
    case "flying":
      return {
        backgroundColor: "#79FFE9",
        color: "black"
      };
    case "water":
      return {
        backgroundColor: "#3D49FF",
      };
    case "bug":
      return {
        backgroundColor: "#B4F074",
        color: "black"
      };
    case "normal":
      return {
        backgroundColor: "#7C7C7C",
      };
    case "electric":
      return {
        backgroundColor: "#F6FC30",
        color: "black"
      };
    case "ground":
      return {
        backgroundColor: "#563811",
      };
    case "fairy":
      return {
        backgroundColor: "#FF99EE",
        color: "black"
      };
    case "fighting":
      return {
        backgroundColor: "#FF8B00",
      };
    case "psychic":
      return {
        backgroundColor: "#8C378C",
      };
    case "ghost":
      return {
        backgroundColor: "#6E2D6E",
      };
    case "rock":
      return {
        backgroundColor: "#B9A35B",
      };
    case "steel":
      return {
        backgroundColor: "#CFCDC8",
        color: "black"
      };
    case "ice":
      return {
        backgroundColor: "#3D92FF",
        color: "black"
      };
    case "dragon":
      return {
        backgroundColor: "#FCD09E",
        color: "black"
      };

    default:
      return {
        backgroundColor: "green"
      };
  }
}