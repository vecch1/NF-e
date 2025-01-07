function calcularImposto(valor, porcentagem) {
    return (valor * porcentagem) / 100;
}

function gerarNotaFiscal() {
    const valorVenda = parseFloat(document.getElementById('valor-venda').value);
    const itens = document.getElementById('itens').value;
    const irpf = parseFloat(document.getElementById('irpf').value);
    const pis = parseFloat(document.getElementById('pis').value);
    const cofins = parseFloat(document.getElementById('cofins').value);
    const inss = parseFloat(document.getElementById('inss').value);
    const issqn = parseFloat(document.getElementById('issqn').value);

    const irpfValor = calcularImposto(valorVenda, irpf);
    const pisValor = calcularImposto(valorVenda, pis);
    const cofinsValor = calcularImposto(valorVenda, cofins);
    const inssValor = calcularImposto(valorVenda, inss);
    const issqnValor = calcularImposto(valorVenda, issqn);

    const totalImpostos = irpfValor + pisValor + cofinsValor + inssValor + issqnValor;
    const totalComImpostos = valorVenda + totalImpostos;

    const notaFiscalHtml = `
        <h2>Nota Fiscal de Serviço</h2>
        <p><strong>Itens Vendidos:</strong> ${itens}</p>
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>IRPF:</strong> R$ ${irpfValor.toFixed(2)}</p>
        <p><strong>PIS:</strong> R$ ${pisValor.toFixed(2)}</p>
        <p><strong>COFINS:</strong> R$ ${cofinsValor.toFixed(2)}</p>
        <p><strong>INSS:</strong> R$ ${inssValor.toFixed(2)}</p>
        <p><strong>ISSQN:</strong> R$ ${issqnValor.toFixed(2)}</p>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Total com Impostos:</strong> R$ ${totalComImpostos.toFixed(2)}</p>
    `;

    document.getElementById('nota-fiscal').innerHTML = notaFiscalHtml;
}