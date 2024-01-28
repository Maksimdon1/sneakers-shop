export async function share({title, text, link, img}){
    if (navigator.share) {
      if(img){
      const response = await  fetch(require(`../static-img${img}`));
      const blob = await response.blob();
      const filesArray = [
        new File(
          [blob],
          'meme.jpg',
          {
            type: "image/jpeg",
            lastModified: new Date().getTime()
          }
       )
      ];

    
        navigator
          .share({
            title: title,
            text: text,
            url: link,
            files : filesArray
          })
          .then(() => console.log("Удалось поделиться"))
          .catch((error) => console.log("Не удалось поделиться", error));
      }}
      else {
        console.log("Нет поддерживаемого браузера");
      }
    

}



export  async function shareImage() {
  const response = await fetch(require("../static-img/flor2/0.png"));
  const blob = await response.blob();
  const filesArray = [
    new File(
      [blob],
      'meme.jpg',
      {
        type: "image/jpeg",
        lastModified: new Date().getTime()
      }
   )
  ];
  const shareData = {
    files: filesArray,
  };
  navigator.share(shareData);
}