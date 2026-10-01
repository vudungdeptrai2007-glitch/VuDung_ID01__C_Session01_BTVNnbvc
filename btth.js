const rawPatientCode = " med-rhm-0815-bhyt ";

const cleanPatientCode = rawPatientCode.trim().toUpperCase();

const isValidCode = cleanPatientCode.startsWith("MED-");

const departmentCode = cleanPatientCode.slice(4, 7);

const hasBHYT = cleanPatientCode.includes("BHYT");

const appointmentNumber = cleanPatientCode.slice(8, 12);

const examinationPrice = 150000;
const discount = hasBHYT ? examinationPrice * 0.8 : 0;
const payment = examinationPrice - discount;

const line = "=".repeat(35);

console.log(`
${line}
       PHIẾU KHÁM BỆNH
${line}
Mã phiếu       : ${cleanPatientCode}
Mã hợp lệ      : ${isValidCode}
Chuyên khoa    : ${departmentCode}
Số thứ tự      : ${appointmentNumber}
BHYT           : ${hasBHYT ? "Có" : "Không"}
Giá khám       : ${examinationPrice.toLocaleString("vi-VN")} VNĐ
Giảm BHYT      : ${discount.toLocaleString("vi-VN")} VNĐ
Cần thanh toán  : ${payment.toLocaleString("vi-VN")} VNĐ
${line}
`);