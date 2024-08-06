const imagePreview = document.getElementById("image-preview");
const fileInput = document.getElementById("file-upload");
const previewImage = document.getElementById("preview-image");
const deleteBtn = document.getElementById("deleteImg");
const placeholderText = document.querySelector(".placeholder-text");

// 이미지 미리보기 클릭 시 파일 입력 클릭
imagePreview.addEventListener("click", () => {
  fileInput.click();
});

// 파일 선택 시 미리보기 업데이트
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function (event) {
      previewImage.src = event.target.result;
      placeholderText.style.display = "none"; // 미리보기 이미지가 있으면 텍스트 숨김
      let delete_button = document.createElement("BUTTON");
      delete_button.appendChild("이미지 삭제");
      deleteBtn.appendChild(delete_button);
    };

    reader.readAsDataURL(file);
  }
});

