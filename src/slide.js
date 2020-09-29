export default function Slide(image, index, classActive = "") {
  const picSrc =
    typeof image === "string"
      ? image
      : "https://images.pexels.com/photos/1770619/pexels-photo-1770619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  return `
    <figure class="image ${classActive}" data-slide="${index}">
      <img src="${picSrc}" alt="image-${index}" />
    </figure>
  `;
}
