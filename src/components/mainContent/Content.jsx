const Content = () => {
  const showText = () => {
    document.getElementById("show").style.visibility = "visible";
  };
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "15px",
      }}
    >
      <button onClick={showText}>show text</button>
      <div
        id="show"
        style={{
          visibility: "hidden",
          textAlign: "justify",
          minHeight: "300px",
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
        ducimus temporibus inventore reprehenderit, quisquam dicta atque enim.
        Maiores iure omnis pariatur mollitia, totam labore veniam eligendi
        dolore nobis, ipsam alias quibusdam earum! Fuga sit illum et sequi ex
        mollitia ad quo, odio laboriosam deserunt, quidem animi. Sed nisi, iure
        eum natus error non facilis, facere totam dolores architecto, cum in
        quia excepturi. Recusandae voluptatem ipsam quo, omnis magni vero magnam
        ullam! Expedita impedit recusandae minima sit incidunt ullam accusantium
        voluptates quas iusto culpa. Totam ipsum inventore praesentium veniam
        similique assumenda harum odio debitis. Neque exercitationem, fugiat
        error molestias nisi maxime?
      </div>
    </div>
  );
};

export default Content;
