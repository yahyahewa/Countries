import "./nav.css";

export default function Nav({ click, onkeyup }) {
  return (
    <nav>
      <div>
        <input
          onKeyDown={(ex) => {
            onkeyup(ex.target.value);
          }}
          type={"text"}
          placeholder="Search for country..."
        />
      </div>
      <div>
        <input
          type="button"
          onClick={(e) => {
            click(e.target.value);
          }}
          value="Africa"
        />
        <input
          type="button"
          onClick={(e) => {
            click(e.target.value);
          }}
          value="Europe"
        />
        <input
          type="button"
          onClick={(e) => {
            click(e.target.value);
          }}
          value="Asia"
        />
        <input
          type="button"
          onClick={(e) => {
            click(e.target.value);
          }}
          value="Oceania"
        />
        <input
          type="button"
          onClick={(e) => {
            click(e.target.value);
          }}
          value="Antarctic"
        />
      </div>
    </nav>
  );
}
