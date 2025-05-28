/*
  Descrição:
Dado um inteiro positivo M, encontre o menor número primo maior ou igual a M que seja também um palíndromo.

Entrada:
Um inteiro M (1 ≤ M ≤ 10^6).
Saída:
O menor número primo palíndromo ≥ M.

Exemplo:
Entrada: 31
Saída:   101
*/

#include <bits/stdc++.h>

using namespace std;

int ehprimo(int p1, int i = 2){
    if (p1 % i == 0){
        return 0;
    }else if(i*i > p1){
        return 1;       
    }
        return ehprimo(p1 , (++i));
}

int main(){
    int x;
    int y;
    bool nPali = true;
    bool nPrim = true;
    string s;
    cin >> x;
    y=x;
while(nPali || nPrim){
    s = to_string(y);
    for(int i = 0;i<s.size();i++){
        if (s[i]!=s[(s.size()-1) - i]){
            y++;
            nPali = true;
            break;
        }else{
            nPali = false;
        }
    }
    if(ehprimo(y)){
        nPrim = false;
    }else{
        y++;
        nPrim = true;
    }
}

cout << y;
}
