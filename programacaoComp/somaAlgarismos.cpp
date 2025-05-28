/*
Descrição:
Dado um número inteiro não-negativo N, some seus dígitos repetidamente até que o resultado tenha apenas um dígito.

Entrada:
Um inteiro N (0 ≤ N ≤ 10¹⁸)

Saída:
Um único dígito resultante da soma recursiva dos dígitos.

Exemplo:
Entrada: 9875    
Saída:   2       
Entrada: 9876
Saida:   3
*/

#include <bits/stdc++.h>

using namespace std;

int main(){
    int x;
    int y;
    int num;
    cin >> x;

    string s = to_string(x);
    
    while(s.size()>1){
        num=0;
        for(int i = 0;i < s.size();i++ ){
           num += s[i] - 48; // 48 é 0 na tabela asc
        }
        s = to_string(num);
    }
    cout << num;
    
    
}
