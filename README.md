# WEB MASTER 

## WEB GROUP 8 - 20241

### Members:
- Phạm Đức Dũng 20215265
- Đinh Huy Dương 20215020   
- Hoàng Đức Dương 20215021
- Nguyễn Gia Tùng Dương 20215023

---
## WORKFLOW
*Làm 1 tính năng mới:
git checkout -b <nhánh mới>

*Thực hiện commit:
1. git add .
2. git commit -m "feat: <Tính năng>"

//Bình luận commit: 
	feat: tính năng mới
	fix: Sửa tính năng cũ
	test: Test 

*Hoàn thiện 1 nhánh, push lên master
1. git checkout master 
2. git pull team --rebase master 
(Trong trường hợp có conflict phải tự sửa)
3. git push origin <tên nhánh>

*Sau đó, vào repo của Dũng, tạo pull request và KO TỰ MERGE, nếu quá nhỏ nhặt ko ảnh hưởng đến ai thì tự merge được

*Trường hợp lỡ đang thực hiện trên nhánh master ở local, CẤM commit mà vẫn phải chuyển sang nhánh mới:
1. git stash (Đây sẽ lưu việc chưa commit nhưng file đã Ctrl S)
2. git checkout -b <nhánh mới> (Chuyển sang nhánh mới để ko làm trên master)
3. git stash apply (Nhả lại cái file Ctrl S mà mình đang làm trên master)
