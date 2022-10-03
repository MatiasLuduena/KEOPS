// copiar al portapapeles
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "react-hot-toast";

const PagoFalse = () => {
  return (
    <div className="container pago-c">
        <div style={{ height: 60 }}></div>
        <h2 className="mx-1 my-3 text-center">Debes realizar el pago para continuar</h2>
        <p className="p-nota">
            Una vez hecho el pago se te desbloqueará el panel principal.
        </p>
        <hr />
        <div>
            <div className="d-flex justify-content-between">
                <h4>Transferencia bancaria</h4>
                <span>AR$399</span>
            </div>
            <p>Se te habilitará la cuenta en 24hs aproximadamente.</p>
            <CopyToClipboard text="0000003100009789453335">
                <div onClick={() => {
                    toast('CVU copiado en portapapeles', { position: 'top-center' });
                }} style={{ cursor: 'pointer' }}>
                    <h6>CVU: 0000003100009789453335</h6>
                </div>
            </CopyToClipboard>
            <Toaster />
            <p className="p-nota">
                Una vez hecha la trasferencia, debe enviarnos el comprobante a nuestro Whatsapp y escribirnos cual es su nombre de usuario único, hecho esto le habilitaremos la cuenta cuando comprobemos de que esté todo correcto.
                Por favor, asegurarse de que el CUIL de la cuenta a transferir sea 20-43694548-6.
            </p>
            <a href="https://api.whatsapp.com/send?phone=543517509643&text=He%20lealizado%20el%20pago,%20solicito%20autorizaci%C3%B3n">ENVIAR COMPROBANTE AL WHATSAPP</a>
        </div>
        <hr />
        <div></div>
    </div>
  );
}

export default PagoFalse;