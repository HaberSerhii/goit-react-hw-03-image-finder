const Section = ({ title, children }) => {
  return (
    <main>
      <div>
        {title && <h2>{title}</h2>}

        {children}
      </div>
    </main>
  );
};

export default Section;