import "./sectionTitle.scss";

type Props = {
  title: string;
};

const SectionTitle = (props: Props) => {
  return (
    <div className="sectionTitle">
      <h2>
        {props.title}
        <span>.</span>
      </h2>
    </div>
  );
};
export default SectionTitle;
