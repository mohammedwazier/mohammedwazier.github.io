#include <iostream>

using namespace std;

double function1(long double nilai1, long double nilai2){
	return nilai1*nilai2;
}
double function2(long double nilai1, long double nilai2){
	return nilai1/nilai2;
}
int function3(int nilai1, int nilai2){
	return nilai1%nilai2;
}

int main(){
	char menu;
	cout << "a. Perkalian" << endl;
	cout << "b. Div / Pembagian" << endl;
	cout << "c. Mod / Sisa hasil bagi" << endl;

	cout << "Pilihan : "; cin >> menu;

	switch(menu){
		case 'a':{
			long double a, b, c;
			cout << "Masukkan Nilai 1 :";
			cin >> a;
			cout << "Masukkan Nilai 2 :";
			cin >> b;
			c = function1(a, b);
		};break;
		case 'b':{
			long double a, b, c;
			cout << "Masukkan Nilai 1 :";
			cin >> a;
			cout << "Masukkan Nilai 2 :";
			cin >> b;
			c = function2(a, b);
		};break;
		case 'c':{
			long double a, b, c;
			cout << "Masukkan Nilai 1 :";
			cin >> a;
			cout << "Masukkan Nilai 2 :";
			cin >> b;
			c = function3(a, b);
		};break;
		default:return 0;
	}
	return main();
}
