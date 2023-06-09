import Card from "components/Card";

import PF from 'json/1_PF.json';
import livroskk from 'json/2_livroskk.json';
import PNamo from 'json/3_PNamo.json';
import gemini from 'json/4_gemini.json';
import DU from 'json/5_DU.json';
import pani from 'json/6_pani.json';
import dino from 'json/7_dino.json';
import NS from 'json/8_NS.json';
import mimos from 'json/9_mimos.json';

import { BiBookHeart, BiCrown } from 'react-icons/bi';
import { GiHeartKey, GiHeartBottle, GiCrownedHeart } from 'react-icons/gi';
import { RiHeartsFill, RiChatHeartLine } from 'react-icons/ri';
import { TbActivityHeartbeat } from 'react-icons/tb';

function App() {

  return (
    <div className="bg-terciary flex justify-center">
      <div className="bg-terciary w-80 max-[320px]:w-full p-4 max-[320px]:p-2">

        <h1 className="text-2xl font-bold text-letterW italic leading-tight text-center mb-5">
          Alguns momentos que tenho fotenhas
        </h1>

        <div className="flex flex-col gap-5 w-full">
          <Card
            title={'Primeira fotenha juntos'}
            imgJSON={PF}
          />
          <BiBookHeart className="mx-auto text-primary text-5xl bg-secundary p-2 rounded-full" />
          <Card
            title={'Aquela biblioteca kk'}
            imgJSON={livroskk}
          />
          <GiHeartKey className="mx-auto text-primary text-5xl bg-secundary p-2 rounded-full" />
          <Card
            title={'Pedido de namoro na finada Saraiva, F'}
            imgJSON={PNamo}
          />
          <RiHeartsFill className="mx-auto text-primary text-5xl bg-secundary p-2 rounded-full" />
          <Card
            title={'O filme que fui assistir totalmente as cegas confiando apenas em ti... Mandou bem'}
            imgJSON={gemini}
          />
          <RiChatHeartLine className="mx-auto text-primary text-5xl bg-secundary p-2 rounded-full" />
          <Card
            title={'Um dia nas tuas férias que fomos fazer "sla o que" em um banco mais afastado na UFC'}
            imgJSON={DU}
          />
          <TbActivityHeartbeat className="mx-auto text-primary text-5xl bg-secundary p-2 rounded-full" />
          <Card
            title={'Pânico 6 filmezão que assisti só pq me fez ver os filmes 1 e 5 da franquia... Mandou bem mais um vez'}
            imgJSON={pani}
          />
          <GiHeartBottle className="mx-auto text-primary text-5xl bg-secundary p-2 rounded-full" />
          <Card
            title={'Dia bem aleatório de ver exposição de dinossauros no Shopping Parangaba... Um típico dia de pobre fazendo pobrice'}
            imgJSON={dino}
          />
          <GiCrownedHeart className="mx-auto text-primary text-5xl bg-secundary p-2 rounded-full" />
          <Card
            title={'Não sei quando foi isso, só sei que o pai aq tava com um trajado diferenciado, mas o motivo não lembro :/'}
            imgJSON={NS}
          />
          <BiCrown className="mx-auto text-primary text-5xl bg-secundary p-2 rounded-full" />
          <Card
            title={'E tb num é pra esquecer dos mimos né <3'}
            imgJSON={mimos}
          />
        </div>
        
        <div className="text-letterW text-center border-2 border-secundary px-2 py-1 mt-4 rounded-lg">
          <p className="mb-2">
            Um singelo álbum de umas fotenha que tenho guardadas separadas por momentos que me lembro resumidos em uma frase :)
          </p>
          <p>
            Ta bom... Talvez tenha locais com duas frases...
          </p>
        </div>

        <div className="text-letterW text-center border-2 border-secundary px-2 py-1 mt-4 rounded-lg">
          <p className="mb-2">
            Enfim esse é uma parte do meu presente que se depender de mim nunca vai ser atualizado kkkkkkk, me cobre fotenhas
          </p>
          <p className="font-bold">
            Eu te ai lovi iú fofa
          </p>
        </div>

      </div>

    </div>
  );
}

export default App;
