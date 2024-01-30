import Img from "@/public/about/maione.jpg";
export const generateUsers = (numberOfUsers: number) => {
  return Array.from({ length: numberOfUsers }, (_, i) => ({
    fallBackName: "US",
    userName: `user${i}`,
    imgUrl: `@/public/about/maione.jpg`,
    // imgUrl: `https://picsum.photos/seed/${i}/200/200`,
  }));
};
