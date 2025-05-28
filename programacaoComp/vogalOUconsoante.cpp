#include <bits/stdc++.h>

using namespace std;

int main(){
    char x;
    cin >> x;
    x = tolower(x);
    string alfabeto = "aeioubcdfghjklmnpqrstvwxyz";
    
    for(int i = 0;i<26;i++){
        if(alfabeto[i]==x && i<5){
            cout << "Vogal";
            break;
        }else  if(alfabeto[i]==x && i>=5){
            cout << "Consoante";
            break;
        } else if (i==25){
            cout<< "Erro";
        }
    }
}
