import { useEffect } from "react";

const Bigmed2000Index = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#FFFFEE";
    document.body.style.color = "#000000";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    }
  }, []);

  const htmlContent = `
<FONT  COLOR=#00DB6D></FONT>
<script language="javascript">
pageonload();
</script>
<CENTER><IMG SRC="../graph/dawn.jpg" WIDTH=600 HEIGHT=124><BR>

<IMG SRC="../graph/firework!.gif" WIDTH=100 HEIGHT=100><BR>
<IMG SRC="../graph/snakeup!.gif" WIDTH=30 HEIGHT=209>
<IMG SRC="../graph/grlotus1.jpg" ALT= "Alex Grey's Chakra Tree" WIDTH=189 HEIGHT=209>
<IMG SRC="../graph/snakeup!.gif" WIDTH=30 HEIGHT=209>
<H3>
Click on our patient below to move on to <BR><A HREF="http://www.nancho.net/">BIG MEDICINE 2001, <BR>the Real Millennium and
<BR>Year of the Golden Serpent</A></H3>
<STRONG>A time of seductive arts, rising illumination and strange numinous power.</STRONG><BR>
(In case you don't put much stock in these quaint superstitions, <BR>
recall that 2000 was a Golden Dragon Year, infamous in the Orient <BR>
for unpredictable eruptions and uproar. Considering just Milosevitch, Israel, the NASDAQ,<BR>
and America's electoral carnage, the elder Asians would simply smile, "Q.E.D".<P>
<P><P>

<H4>BIG MED'S PATIENT OF THE YEAR<BR>
A Fever Chart of Planet Earth</H4>



<A HREF="http://www.nancho.net/bigmed2001/index.html"><IMG SRC="../graph/earthlis.jpg" WIDTH=599 HEIGHT=278></A>
<BR><FONT  SIZE=+1>Bright Areas Show Malignant Spread of Corporate Hives</FONT><BR>(Where corporate driven consumption threatens the Earth and all mankind.)
</CENTER>
`;

  return (
    <div className="min-h-screen text-xl md:text-2xl leading-relaxed p-4 md:p-8 w-full max-w-4xl mx-auto" style={{ fontFamily: "Times New Roman, serif", color: "#000055" }}>
      <style>{`
        a { color: #B32D41; text-decoration: underline; font-weight: bold; }
        a:hover { color: #FF4444; }
        h1, h2, h3, h4, h5, h6 { font-weight: bold; margin-bottom: 1em; text-align: left; width: 100% !important; }
        strong, b { font-weight: 900; }
        ul { list-style-type: disc; padding-left: 2em; margin-bottom: 1em; width: 100% !important; }
        li { margin-bottom: 0.5em; }
        img { max-width: 100%; height: auto; display: inline-block; }
        center { text-align: center; display: block; width: 100% !important; }
        hr { border: 0; border-top: 2px solid currentColor; margin: 1em auto; width: 100% !important; }
        
        p, td, blockquote, li, font, div {
          font-size: 1.6rem !important;
          line-height: 1.7 !important;
        }
        
        /* Force full horizontal width for paragraphs, blockquotes, and tables */
        blockquote { 
          margin-left: 0 !important; 
          margin-right: 0 !important; 
          padding-left: 0 !important; 
          padding-right: 0 !important; 
          width: 100% !important; 
          max-width: 100% !important; 
        }
        table { 
          clear: both;
          width: 100% !important; 
          max-width: 100% !important; 
          margin-top: 1.5rem;
        }
        p { 
          width: 100% !important; 
          max-width: 100% !important; 
        }
      `}</style>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="w-full" />
    </div>
  );
};

export default Bigmed2000Index;
