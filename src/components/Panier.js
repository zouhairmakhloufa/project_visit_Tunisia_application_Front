import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const Panier = ({ panier,setPanier }) => {

  console.log("777777777",panier)
  // Vérification pour éviter l'erreur
  if (!panier || panier.length === 0) {
    return (
      <div className="container">
        <h1> Panier</h1> <br/>
        <h2>Votre panier est vide.</h2>
      </div>
    );
  }
  

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...panier];
    updatedCart.splice(index, 1);
  
    // Mettez à jour le panier avec la nouvelle copie
    setPanier(updatedCart);
  
    // Mettez à jour le nombre de produits dans le panier
    // setNombreProduitsPanier(updatedCart.length);
  
    // Mettez à jour le localStorage
    localStorage.setItem('panier', JSON.stringify(updatedCart));
  };
  
  return (
    <div className="container"style={{display: "flex",
      gap: "50px",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "65px"}}>
      {/* <h1>Mon Panier</h1> */}
      {panier.map((item, k) => (
        <div className="pb-3" key={k} style={{width:"50%"}}>
          <div className="blog-item">
            <div className="position-relative">
              <img className="cc" src={item?.image} alt="" />
              <div className="blog-date">
                <h6 className="font-weight-bold mb-n1">01</h6>
                <small className="text-white text-uppercase">Jan</small>
              </div>
            </div>
          </div>
          <div className="bg-white mb-3" style={{ padding: 20 , width: 350 }}>
            <div className="d-flex mb-3">
              <a className="text-primary text-uppercase text-decoration-none">
                {item?.name}
              </a>
              <span className="text-primary px-2">|</span>
              <a className="text-primary text-uppercase text-decoration-none">
                {item?.problem}
              </a>
            </div>
            <h2 className="mb-3">Description Lieu</h2>
            <p>{item?.description}</p>
          </div>
          <div>
            <button className="btn btn-success">Passer Le Commande</button>
            <button
          className="btn btn-danger"
           onClick={() => handleRemoveFromCart(k)} // Assurez-vous de gérer la suppression
       
        >
             <FontAwesomeIcon icon={faTimes} />
          Supprimer
        </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Panier;


