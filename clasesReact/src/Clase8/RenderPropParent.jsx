// El Componente hijo recibe como 'prop' una función del Componente Padre y le asigna los valores ahí mismo. En otras palabras, el Componente Padre llama al Componente hijo y le pasa una función, y este último se encarga de asignarle valores y retornarlo.

const RenderPropParent = () => {
  const renderContent = (data) => (
    <div>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );

  return (
    <div className="text-center">
      <h1>H1 - Componente Padre</h1>
      <RenderPropChild render={renderContent} />
    </div>
  );
};

const RenderPropChild = ({ render }) => {
  const data = {
    title: 'H3 - Título, Componente Hijo',
    description: 'P - Descripción, Componente Hijo',
  };

  return render(data);
};

export default RenderPropParent;