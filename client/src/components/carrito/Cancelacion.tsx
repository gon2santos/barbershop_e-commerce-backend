import { useEffect, useCallback } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { cancelOrders } from "../slices/purchaseOrder";
const Cancelacion = () => {
  type QuizParams = {
    idOrder: string;
  };
  const { idOrder } = useParams<QuizParams>();
  const { purchaseOrder } = useAppSelector((state: RootState) => state.orders);

  const dispatch = useAppDispatch();
  useEffect(() => {
    return window.localStorage.removeItem("product");
  }, []);

  const inicializar = useCallback(async () => {
    if (idOrder) {
      dispatch(cancelOrders(idOrder));
    }
  }, [dispatch, idOrder]);

  useEffect(() => {
    inicializar();

    //return window.localStorage.removeItem("product");
  }, [dispatch, inicializar]);

  console.log(purchaseOrder?.products);
  let total = 0;

  const navigate = useNavigate();
  const carrito = JSON.parse(window.localStorage.getItem("product") || "{}");
  if (Object.keys(carrito).length) {
    total = carrito.reduce(
      (acc: number, prod: { productos: { price: number } }) => {
        return acc + prod.productos.price;
      },
      0
    );
  }

  return (
    <div className="h-full bg-white">
      <div className="bg-[#B1A26A] py-20 border-black"></div>
      <div className="bg-white border-2 border-black -mt-10 mx-8">
        <h1 className="flex justify-center font-bold text-2xl">
          COMPRA CANCELADA
        </h1>

        <div className="border border-black m-8 ">
          <div className="grid grid-cols-[1fr_2fr] my-16 gap-4">
            <div className="justify-self-center">id:{idOrder}</div>
            <div className="border-l border-black pl-16  grid gap-4">
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr] pb-4">
                <p>nombre</p>
                <p>precio</p>
                <p>cantidad</p>
                <p>total</p>
              </div>
              {Object.keys(carrito).length &&
                carrito.map((prod: any) => {
                  const total = prod.productos.price * prod.cantidad;
                  return (
                    <div className="grid grid-cols-[2fr_1fr_1fr_1fr]">
                      <p>{prod.productos.name}</p>
                      <p>{prod.productos.price}</p>
                      <p>{prod.cantidad}</p>
                      <p>{total}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="grid grid-cols-[2fr_.5fr] gap-16 mb-2">
            <div className="justify-self-end mr-16">total: </div>
            <div className="justify-self-center">${total}</div>
          </div>
        </div>

        <RiArrowGoBackFill
          onClick={() => {
            navigate("/");
          }}
          className="m-4 cursor-pointer"
          title="Home"
        />
      </div>
    </div>
  );
};

export default Cancelacion;
