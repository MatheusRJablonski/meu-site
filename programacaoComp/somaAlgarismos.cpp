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
    cout << x % 10;
    
}
