/*
 * Assignment: CS460 Interpreter
 * Authors: Evan Walters, Luis carmona, Ben Harris, Hanpei Zhang
 * Date: 2/8/24
 * Description:
 *
 */

#include "./CST/Parser.h"
#include "./CommentRemoval/fileAsArray.h"
#include "./OutputCST/OutPutGenerator.h"
#include "./SymbolTable/SymbolTablesLinkedList.h"
#include "./Token/Tokenizer.h"
#include <fstream>
#include <iostream>
#include <string>

using namespace std;

int main(int argc, char *argv[]) {
    if (argc < 3) {
        cerr << "Usage: " << argv[0] << " <filename> <option>" << endl;
        return 1;
    }

    string filename = argv[1];
    string option = argv[2]; 

    fileAsArray fileArray(filename);
    fileArray.readFile();

    try {
        fileArray.File_w_no_comments();
    } catch (const std::exception& error) {
        cerr << "Exception caught: " << error.what() << endl;
        return 1;
    }

    Tokenizer tokenizer(fileArray.getFileContent());
    tokenizer.tokenizeVector();
    vector<Token> tokens = tokenizer.getTokens();

    if (option == "tokens") {
        for (const auto& token : tokens) {
            token.print(); 
        }
        return 0;
    }

    Parser parser(tokens);
    auto cstRoot = parser.parse();

    if (option == "cst") {
        OutPutGenerator CSToutput;
        CSToutput.PrintCST(cstRoot);
        return 0;
    }

    if (option == "symbolTable") {
        SymbolTablesLinkedList tables(cstRoot);
        auto symTableRoot = tables.parse();
        OutPutGenerator STOutput;
        STOutput.PrintSymbolTables(symTableRoot);
        return 0;
    }

    return 0;
}