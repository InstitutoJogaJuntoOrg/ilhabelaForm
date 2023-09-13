import { useInterval } from "primereact/hooks";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TimerContext } from "../../../../context/timer";
import { Container } from "./styles";

export default function Timer() {
  const navigate = useNavigate();
  const { seconds, minutes, active, setSeconds, setMinutes } =
    useContext(TimerContext);

  useInterval(
    () => {
      if (seconds === 59) {
        setMinutes((prevMinutes) => prevMinutes + 1);
        setSeconds(0);
      } else {
        setSeconds((prevSecond) => prevSecond + 1);
      }
    },
    1000,
    active
  );

  useEffect(() => {
    if (minutes === 30) {
      alert("O tempo para realização da prova, expirou!");
      setMinutes(0);
      navigate("/");
    }
  }, [minutes]);

  return (
    <>
      <Container>
        <div className="card flex flex-column align-items-center">
          <div className="mb-3 font-bold text-4xl">
            Tempo decorrido:{" "}
            <strong>
              {minutes} minutos {seconds} segundos
            </strong>
          </div>
          <div className="mb-3 font-bold text-4xl limitedTime">
            Tempo limite: 30 minutos
          </div>

          <br />
          <span>
            Lembre-se, caso o tempo se esgote antes do envio da prova, você será
            redirecionado para a tela inicial e precisará refaze-la.
          </span>
        </div>
      </Container>
    </>
  );
}
