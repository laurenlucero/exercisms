// switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case

export const translate = (s) => {
  let rna = [];
  let results = [];

  if (!s) {
    return rna;
  }

  for (let i = 0; i < s.length; i = i + 3) {
    rna.push(s.slice(i, i + 3));
  }

  for (let i = 0; i < rna.length; i++) {
    switch (rna[i]) {
      case "AUG":
        results.push("Methionine");
        break;
      case "UUU":
        results.push("Phenylalanine");
        break;
      case "UUC":
        results.push("Phenylalanine");
        break;
      case "UUA":
        results.push("Leucine");
        break;
      case "UUG":
        results.push("Leucine");
        break;
      case "UCU":
        results.push("Serine");
        break;
      case "UCC":
        results.push("Serine");
        break;
      case "UCA":
        results.push("Serine");
        break;
      case "UCG":
        results.push("Serine");
        break;
      case "UAU":
        results.push("Tyrosine");
        break;
      case "UAC":
        results.push("Tyrosine");
        break;
      case "UGU":
        results.push("Cysteine");
        break;
      case "UGC":
        results.push("Cysteine");
        break;
      case "UGG":
        results.push("Tryptophan");
        break;
      case "UAA":
        return results;
      case "UAG":
        return results;
      case "UGA":
        return results;
      default:
        throw new Error("Invalid codon");
    }
  }
  return results;
};
