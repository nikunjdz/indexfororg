import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import KipowerKiarts from "./pages/KipowerKiarts.tsx";
import KyotoKyoijin from "./pages/KyotoKyoijin.tsx";
import Bigmed2000Biggloss from "./pages/Bigmed2000Biggloss.tsx";
import NanchoGhqkuma1 from "./pages/NanchoGhqkuma1.tsx";
import AnthcultLancet2 from "./pages/AnthcultLancet2.tsx";
import KipowerKibkoutl from "./pages/KipowerKibkoutl.tsx";
import NanchoSouthdef from "./pages/NanchoSouthdef.tsx";
import BigbodyLusions3 from "./pages/BigbodyLusions3.tsx";
import KipowerKisoma from "./pages/KipowerKisoma.tsx";
import CityhallRectmeme from "./pages/CityhallRectmeme.tsx";
import MemesInfoviru from "./pages/MemesInfoviru.tsx";
import MemesOrthodoc from "./pages/MemesOrthodoc.tsx";
import BigbodyLusions1 from "./pages/BigbodyLusions1.tsx";
import AnthcultCastreg from "./pages/AnthcultCastreg.tsx";
import EarthourEhdates from "./pages/EarthourEhdates.tsx";
import FirstlightKonomi from "./pages/FirstlightKonomi.tsx";
import NanchoOtheremp from "./pages/NanchoOtheremp.tsx";
import TantraTangrail from "./pages/TantraTangrail.tsx";
import MemesAbexotic from "./pages/MemesAbexotic.tsx";
import KipowerMindbind from "./pages/KipowerMindbind.tsx";
import BigbodyChrtink1 from "./pages/BigbodyChrtink1.tsx";
import BigbodyApforum1 from "./pages/BigbodyApforum1.tsx";
import NanchoIjinregs from "./pages/NanchoIjinregs.tsx";
import EarthourEarthour from "./pages/EarthourEarthour.tsx";
import KipowerKipower1 from "./pages/KipowerKipower1.tsx";
import MemesMemework from "./pages/MemesMemework.tsx";
import AnthcultCastrhiv from "./pages/AnthcultCastrhiv.tsx";
import BigbodyCorprule from "./pages/BigbodyCorprule.tsx";
import CityhallCatacomb from "./pages/CityhallCatacomb.tsx";
import TantraTantween from "./pages/TantraTantween.tsx";
import Bigmed2000Index from "./pages/Bigmed2000Index.tsx";
import NanchoGhqemps1 from "./pages/NanchoGhqemps1.tsx";
import BigbodyBbjbrown from "./pages/BigbodyBbjbrown.tsx";
import BigbodyKnox1 from "./pages/BigbodyKnox1.tsx";
import CorporatePersonhood from "./pages/CorporatePersonhood.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nancho/ghqkuma1.html" element={<NanchoGhqkuma1 />} />
          <Route path="/bigbody/lusions3.html" element={<BigbodyLusions3 />} />
          <Route path="/kyoto/kyoijin.html" element={<KyotoKyoijin />} />
          <Route path="/bigbody/bbjbrown.html" element={<BigbodyBbjbrown />} />
          <Route path="/nancho/ijinregs.html" element={<NanchoIjinregs />} />
          <Route path="/tantra/tantween.html" element={<TantraTantween />} />
          <Route path="/cityhall/catacomb.html" element={<CityhallCatacomb />} />
          <Route path="/memes/infoviru.html" element={<MemesInfoviru />} />
          <Route path="/cityhall/rectmeme.html" element={<CityhallRectmeme />} />
          <Route path="/nancho/ghqemps1.html" element={<NanchoGhqemps1 />} />
          <Route path="/kipower/kibkoutl.html" element={<KipowerKibkoutl />} />
          <Route path="/kipower/kiarts.html" element={<KipowerKiarts />} />
          <Route path="/anthcult/lancet2.html" element={<AnthcultLancet2 />} />
          <Route path="/earthour/ehdates.html" element={<EarthourEhdates />} />
          <Route path="/earthour/earthour.html" element={<EarthourEarthour />} />
          <Route path="/bigmed2000/index.html" element={<Bigmed2000Index />} />
          <Route path="/nancho/otheremp.html" element={<NanchoOtheremp />} />
          <Route path="/1stlight/konomi.html" element={<FirstlightKonomi />} />
          <Route path="/kipower/mindbind.html" element={<KipowerMindbind />} />
          <Route path="/nancho/southdef.html" element={<NanchoSouthdef />} />
          <Route path="/bigmed2000/biggloss.html" element={<Bigmed2000Biggloss />} />
          <Route path="/bigbody/apforum1.html" element={<BigbodyApforum1 />} />
          <Route path="/kipower/kisoma.html" element={<KipowerKisoma />} />
          <Route path="/memes/memework.html" element={<MemesMemework />} />
          <Route path="/tantra/tangrail.html" element={<TantraTangrail />} />
          <Route path="/bigbody/corprule.html" element={<BigbodyCorprule />} />
          <Route path="/memes/abexotic.html" element={<MemesAbexotic />} />
          <Route path="/bigbody/lusions1.html" element={<BigbodyLusions1 />} />
          <Route path="/kipower/kipower1.html" element={<KipowerKipower1 />} />
          <Route path="/anthcult/castreg.html" element={<AnthcultCastreg />} />
          <Route path="/bigbody/chrtink1.html" element={<BigbodyChrtink1 />} />
          <Route path="/memes/orthodoc.html" element={<MemesOrthodoc />} />
          <Route path="/anthcult/castrhiv.html" element={<AnthcultCastrhiv />} />
          <Route path="/bigbody/knox1.html" element={<BigbodyKnox1 />} />
          
          <Route path="/corperson" element={<CorporatePersonhood />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
