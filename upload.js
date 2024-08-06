document.addEventListener('DOMContentLoaded', () => {
    const imagePreview = document.getElementById('image-preview');
    const fileInput = document.getElementById('imgFile-upload');
    const previewImage = document.getElementById('preview-image');
    const placeholderText = document.querySelector('.placeholder-text');
    const deleteButton = document.getElementById('delete-button');

    // 이미지 미리보기 클릭 시 파일 입력 클릭
    imagePreview.addEventListener('click', () => {
        fileInput.click();
    });

    // 파일 선택 시 미리보기 업데이트
    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function(event) {
                previewImage.src = event.target.result;
                placeholderText.style.display = 'none'; // 미리보기 이미지가 있으면 텍스트 숨김
                deleteButton.style.display = 'block'; // 삭제 버튼 표시
            }
            
            reader.readAsDataURL(file);
        }
    });

    // 삭제 버튼 클릭 시 이미지와 버튼 숨김
    deleteButton.addEventListener('click', () => {
        previewImage.src = '';
        placeholderText.style.display = 'block'; // 안내 텍스트 표시
        deleteButton.style.display = 'none'; // 삭제 버튼 숨김
        fileInput.value = ''; // 파일 입력 초기화
    });
});