// ===================================================
// claim-voucher.dto.ts — Data Transfer Object
// Defines the shape of the request body for the
// POST /voucher/claim endpoint.
// ===================================================

export class ClaimVoucherDto {
  // The secret voucher code typed by the user
  code: string;
}
