import "./App.css";
import { formatarData } from "./dominio/utils/formatarData";
import { obterSaudacao } from "./dominio/utils/obterSaudacao";
import { Usuario } from "./dominio/entidades/Usuario";
import { gerarCalendario } from "./dominio/utils/gerarCalendario";
import { Habito } from "./dominio/entidades/Habito";
import { listarHabitos } from "./dominio/listarHabitos";

function App() {

  const usuarioLogado: Usuario = {
    id: "1",
    name: "Beatriz",
    foto: "https://avatar.iran.liara.run/public/70",
  };

  const dias = gerarCalendario();

  const novoHabito: Habito = {
    id: "um",
    nome: "estudar programação",
    duracao: 5,
    sequencia: 3,
    status: false,
    diasDaSemana: [],
    criadoEm: new Date()
  }
  const listaDeHabitos = [novoHabito];
  return (
   
    <div className="flex flex-col items-center w-full min-h-screen  gap-8">
      
      
      <div className="flex flex-row justify-between items-center w-full">
        
        
        <div className="flex flex-col items-start gap-1.5">
          <span className="text-2xl font-bold text-slate-900">
            {obterSaudacao(usuarioLogado)}
          </span>
          <span className="text-sm text-slate-500">
            {formatarData()}
          </span>
        </div>

        
        <img 
          src={usuarioLogado.foto} 
          alt={usuarioLogado.name} 
          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
        />
      </div>

      

      <div className="flex flex-col mt-4 w-full">
        <div className="flex items-center gap-2 w-full justify-between">{dias.map((item) =>(
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-xs font-medium text-slate-600 uppercase">{item.nome}</span>
            <span className={`w-10 h-10 rounded-full flex items-center justify-center ${item.isHoje ? 'bg-slate-900 text-white' : 'text-slate-500'}`}>{item.numero}</span>
          </div>
        ))}</div>
     </div>

      
<div className="w-full bg-[#FFF0E5] rounded-[32px] p-6 flex flex-row items-center justify-between shadow-sm">
  
 
  <div className="flex flex-col gap-1">
    <span className="font-bold text-orange-900 text-lg">
      Sua jornada importa
    </span>
    <p className="text-sm text-orange-800 opacity-80 leading-relaxed">
      Pequenos hábitos hoje constroem <br /> grandes resultados amanhã.
    </p>
  </div>

  
  <div className="text-4xl bg-white/50 w-14 h-14 flex items-center justify-center rounded-2xl">
    🔔
  </div>
</div>
         
 
<div className="flex flex-col w-full mt-2 gap-4">
  <div className="flex flex-row justify-between items-center w-full">
    <h2 className="text-xl font-bold text-slate-900">Daily routine</h2>
    <button className="text-sm font-medium text-orange-800 opacity-60">See all</button>
  </div>

  
  {listaDeHabitos.map((item) => (
    <div 
      key={item.id} 
      className="bg-white rounded-[24px] p-4 flex flex-row items-center justify-between w-full shadow-sm"
    >
      
      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
        item.status ? 'bg-orange-500 border-orange-500' : 'border-slate-300'
      }`}>
        {item.status && <span className="text-white text-xs">✓</span>}
      </div>

      
      <div className="flex-1 px-4 flex flex-col items-start">
        <span className="font-bold text-slate-900 text-base leading-tight">
          {item.nome}
        </span>
        <span className="text-xs text-slate-500">
          Streak {item.sequencia} days
        </span>
      </div>

      
      <div className="flex flex-row items-center gap-1.5 opacity-60">
        <span className="text-lg">🕒</span>
        <span className="text-xs font-semibold text-slate-900">
          {item.duracao} min
        </span>
      </div>
    </div>
  ))}
</div>
</div>
  );
}

export default App;