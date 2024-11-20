import { toast } from "react-toastify";

export function numberToWords(number: number): string {
  const units: string[] = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];

  const teens: string[] = [
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];

  const tens: string[] = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  if (number === 0) {
    return "Zero";
  }

  if (number < 10) {
    return units[number];
  }

  if (number >= 11 && number <= 19) {
    return teens[number - 11];
  }

  const numArray: number[] = number.toString().split("").map(Number);
  const numWords: string[] = [];

  if (numArray[0] > 0) {
    numWords.push(units[numArray[0]] + " Hundred");
  }

  if (numArray[1] > 1) {
    numWords.push(tens[numArray[1]]);
    if (numArray[2] > 0) {
      const unitWord: string = units[numArray[2]];
      numWords.push(unitWord);
    }
  } else if (numArray[1] === 1) {
    numWords.push(teens[numArray[2] - 1]);
  } else if (numArray[2] > 0) {
    const unitWord: string = units[numArray[2]];
    numWords.push(unitWord);
  }

  return numWords.join(" ");
}

export const GrabMe = (data: any, title: string | string[]): any => {
  let GrabbedContent: any;

  if (!title || title.length === 0 || !data) {
    return null;
  }

  if (Array.isArray(title)) {
    GrabbedContent = data?.filter((content: any) =>
      title.includes(content.title),
    );
  } else {
    GrabbedContent = data?.find((content: any) => content.title === title);
  }

  if (
    typeof GrabbedContent === "object" &&
    Object.keys(GrabbedContent).length === 0
  ) {
    return null;
  }

  return GrabbedContent;
};

export const GiveMeSliderData = (data: any): any[] | null => {
  if (!data || data === undefined || data === null || Array.isArray(data)) {
    return null;
  }

  const ImageURL: string[] = data?.content;
  const tags: string[] = Object.values(data?.tags);

  const content = ImageURL.map((element: string, index: number) => {
    return {
      pictures: element,
      overlay: index + 1 === 1 ? false : true,
      narration:
        tags[index] ?? "We Construct and Manage Places and Infrastructures.",
    };
  });

  return content;
};

export function getFirstLetters(inputString: string): string {
  const words: string[] | undefined = inputString?.split(" ");

  if (words?.length === 0 || !inputString) {
    return "N/A"; // No words in the input string
  }

  if (words?.length === 1) {
    const word: string = words[0];
    if (word?.length === 1) {
      return word?.repeat(2); // If it's a single letter, return it repeated
    }
    return word?.slice(0, 2); // If it's a single word, return the first two letters
  }

  const firstWord: string = words[0];
  const secondWord: string = words[1];

  return `${firstWord.charAt(0)}${secondWord.charAt(0)}`;
}
 
export function addCommas(number: number): string {
  // Check if the input is a valid number
  if (typeof number !== "number" || isNaN(number)) {
    return "0"; // Return '0' or a suitable default for invalid inputs
  }

  const numStr: string = number.toString();
  const [integerPart, decimalPart] = numStr.split(".");
  const formattedInteger: string = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  // Append the decimal part if it exists
  return decimalPart !== undefined
    ? `${formattedInteger}.${decimalPart}`
    : formattedInteger;
}

export function truncateHex({ hexString, len }: any) {
  if (hexString?.length > len && len > 5) {
    const prefixLength = Math.ceil((len - 5) / 2);
    const suffixLength = len - prefixLength - 3; // 3 for the ellipsis

    const prefix = hexString?.substring(0, prefixLength);
    const suffix = hexString?.substring(hexString.length - suffixLength);

    return prefix + "..." + suffix;
  }
  return hexString;
}

export function truncate({ str, len }: any) {
  if (str.length > len && str.length > 0) {
    let new_str = str + "";
    new_str = str.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(""));
    new_str = new_str.length > 0 ? new_str : str.substr(0, len);
    return new_str + "...";
  }
  return str;
}

export const copyTextToClipboard = async (text: string) => {
  if ("clipboard" in navigator) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("copied");
      return true;
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
      toast.error("Failed to copy");
      return false;
    }
  } else {
    try {
      const success = document.execCommand("copy", true, text);
      if (!success) {
        console.error("Failed to copy text to clipboard.");
      }
      toast.success("copied");
      return success;
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
      toast.error("Failed to copy");
      return false;
    }
  }
}; 
export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  desc: string;
}
export const getFromLocalStorage = (value: string) => {
  if (!value || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(value);
};
