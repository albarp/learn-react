export default function Gallery() {
  return (
    <section>
      <h1>Great scientists</h1>
      <Profile/>
      <Profile/>
      <Profile/>
    </section>
  );
}

function Profile() {
  return <
    img src="https://i.imgur.com/MK3eW3As.jpg" 
    alt="Ketherine Johnson"
    />;
}
